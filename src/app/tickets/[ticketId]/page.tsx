import { initialTickets } from "@/data";


type TicketPageProps = {
    params: {
        ticketId: string
    }
}

const Ticket = ({ params }: TicketPageProps) => {
    const ticket = initialTickets.find(ticket => ticket?.id === Number(params?.ticketId));

    if (!ticket) {
        return <div>Ticket not Found!!!</div>
    }
    return (
        <div>
            <h2 className="text-lg"> {ticket?.title}</h2>
            <p className="text-sm">{ticket?.content}</p>
        </div>
    )
}

export default Ticket;