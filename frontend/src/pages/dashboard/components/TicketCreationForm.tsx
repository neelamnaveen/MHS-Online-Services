import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Modal from "@mui/joy/Modal";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Dropdown,
  Grid,
  Menu,
  MenuButton,
  MenuItem,
  ModalDialog,
} from "@mui/joy";
import { Add, DeleteForever, Warning } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { DateTimePicker } from "@mui/x-date-pickers";

export default function TicketCreationForm() {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState<boolean>(false);

  const [date, setDate] = React.useState(null);

  interface FormElements extends HTMLFormControlsCollection {
    date: HTMLInputElement;
    typeOfService: HTMLInputElement;
    place: HTMLInputElement;
    comments: HTMLInputElement;
  }
  interface TicketFormElement extends HTMLFormElement {
    readonly elements: FormElements;
  }

  interface ITicket {
    date: string;
    typeOfService: string;
    place: string;
    comments: string;
    serviceId?: string;
  }

  async function handleSubmition() {
    try {
      let data = (window.localStorage.getItem("newTicketReq") ||
        "new ticket not updated at client side") as unknown as ITicket;
      data.serviceId = sessionStorage.getItem("serviceId") as string;
      await axios.post(`${process.env.REACT_APP_API_URL}/ticket`, data);
      alert(
        "మీ రిక్వెస్ట్ ను స్వీకరిచినం, మా కస్టమర్ సపోర్ట్ మీకు కాల్ చేస్తాడు"
      );
      navigate("/tickets");

      window.localStorage.removeItem("newTicketReq");
      sessionStorage.removeItem("serviceId");
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }

  function setDataInBrowser(newTicketReq: ITicket) {
    window.localStorage.setItem("newTicketReq", JSON.stringify(newTicketReq));
    setOpen(true);
  }

  return (
    <Sheet
      sx={{
        display: "flex",
        flexFlow: "row wordwrap",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "95vh",
      }}
    >
      <form
        onSubmit={(event: React.FormEvent<TicketFormElement>) => {
          event.preventDefault();
          const formElements = event.currentTarget.elements;
          const data = {
            date: formElements.date.value,
            typeOfService: formElements.typeOfService.value,
            place: formElements.place.value,
            comments: formElements.comments.value,
          };
          //   alert(JSON.stringify(data, null, 2));
          // handleSubmition(data)

          setDataInBrowser(data);
        }}
      >
        <Grid container spacing={2} sx={{ flexGrow: 1, mt: "6vh" }}>
          <Grid>
            <FormControl required>
              {/* <DateTimePicker
                label="Select a date and time"
                value={date}
                onChange={(newValue) => setDate(newValue)}
              /> */}
              <FormLabel>Date/ తేదీ</FormLabel>
              <Input name="name" type="text" />
            </FormControl>
          </Grid>
          <Grid>
            <FormControl>
              <FormLabel>Place/ ప్రాంతం</FormLabel>
              <Input name="place" type="text" placeholder="place" />
            </FormControl>
          </Grid>
          <Grid>
            <FormControl>
              <FormLabel>Comments/ వ్యాఖ్యలు</FormLabel>
              <Input name="comments" type="text" placeholder="comments" />
            </FormControl>
          </Grid>
        </Grid>
        <Grid sx={{ mt: 5 }}>
          <Sheet
            sx={{
              display: "flex",
              flexFlow: "row nowrap",
              justifyContent: "center",
              alignItems: "center",
              // minHeight: '40vh',
            }}
          >
            <Button
              variant="solid"
              color="primary"
              // startDecorator={<Add />}
              // onClick={() => {}}
              type="submit"
            >
              New Ticket Request/ సేవా అభ్యర్థనను పంపండి
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
              <ModalDialog variant="outlined" role="alertdialog">
                <DialogTitle>
                  <Warning />
                  Confirmation
                </DialogTitle>
                <Divider />
                <DialogContent>
                  Are you sure you want to create request for the ticket ?
                </DialogContent>
                <DialogActions>
                  <Button
                    type="submit"
                    value="submit"
                    variant="solid"
                    color="danger"
                    onClick={() => {
                      setOpen(false);
                      handleSubmition();
                    }}
                  >
                    Continue
                  </Button>
                  <Button
                    variant="plain"
                    color="neutral"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                </DialogActions>
              </ModalDialog>
            </Modal>
          </Sheet>
        </Grid>
      </form>
    </Sheet>
  );
}
