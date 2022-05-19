import { Summary } from "../Summary";
import { TransactionsTables } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
  return(
    <Container>
      <Summary />
      <TransactionsTables />
    </Container>
  )
}