import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Modal from '@mui/joy/Modal';
import { DialogActions, DialogContent, DialogTitle, Divider, Dropdown, Menu, MenuButton, MenuItem, ModalDialog } from '@mui/joy';
import { Add, DeleteForever, Warning } from '@mui/icons-material';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function TicketCreationForm() {
    const navigate = useNavigate();

    const [open, setOpen] = React.useState<boolean>(false);

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
    };

    async function handleSubmition() {
        // alert("service request sumbitted" + JSON.stringify(data));
        try {
            let data = window.localStorage.getItem("newTicketReq") || "new service not updated at client side";

            await axios.post('/service', JSON.parse(data));
            alert("Your service has been updated in blockchain")
            navigate("/services");

            window.localStorage.removeItem("newTicketReq");

        } catch (err) {
            alert(err);
            console.log(err)
            // setWarning(true);
            // setWarningMessage("Please enter correct email and password");
            // setTimeout(() => {
            //     setWarning(false);
            // }, 5000);
        }
    }

    function setDataInBrowser(newTicketReq: ITicket) {
        window.localStorage.setItem("newTicketReq", JSON.stringify(newTicketReq));
        setOpen(true);
    }

    return (
        <Sheet
            sx={{
                display: 'flex',
                flexFlow: 'row wordwrap',
                justifyContent: 'center',
                alignItems: 'flex-start',
                minHeight: '95vh',
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

                    setDataInBrowser(data)
                }}
            >
                <Sheet
                    sx={{
                        //   width: 300,
                        mx: 'auto',
                        my: 4,
                        py: 3,
                        px: 2,
                        display: 'flex',
                        // flexDirection: 'row',
                        gap: 2,
                        borderRadius: 'sm',
                        boxShadow: 'md',
                    }}
                    variant="outlined"
                    className="serviceForm"
                >
                    <FormControl required>
                        <FormLabel>Date</FormLabel>
                        <Input name="name" type="text" />
                    </FormControl>
                    <FormControl required>
                        <FormLabel>Type Of Service</FormLabel>
                        <Select placeholder="Choose the service" id="typeOfService">
                            <Option value="lending">Cleaning</Option>
                            <Option value="borrowing">Cooking</Option>
                        </Select>
                    </FormControl>
                    <FormControl required>
                        <FormLabel>Place</FormLabel>
                        <Input name="place" type="text" placeholder="place" />
                    </FormControl>
                    <FormControl required>
                        <FormLabel>Comments</FormLabel>
                        <Input name="comments" type="text" placeholder="comments" />
                    </FormControl>
                </Sheet>
                <Sheet
                    sx={{
                        display: 'flex',
                        flexFlow: 'row nowrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // minHeight: '40vh',
                    }}
                >
                    <Button
                        variant="solid"
                        color="primary"
                        startDecorator={<Add />}
                        // onClick={() => {}}
                        type="submit"
                    >
                        New Ticket Request
                    </Button>
                    <Modal open={open} onClose={() => setOpen(false)}>
                        <ModalDialog variant="outlined" role="alertdialog">
                            <DialogTitle>
                                <Warning />
                                Confirmation
                            </DialogTitle>
                            <Divider />
                            <DialogContent>
                                Are you sure you want to create request for the service ?
                            </DialogContent>
                            <DialogActions>
                                <Button type="submit" value="submit" variant="solid" color="danger" onClick={() => { setOpen(false); handleSubmition() }}>
                                    Continue
                                </Button>
                                <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
                                    Cancel
                                </Button>
                            </DialogActions>
                        </ModalDialog>
                    </Modal>
                </Sheet>
            </form>
        </Sheet>
    );
}