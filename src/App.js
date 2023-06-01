import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Icon,
  Segment,
  Statistic,
} from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>
      <Statistic size="small">
        <Statistic.Label>your balance:</Statistic.Label>
        <Statistic.Value>89.9</Statistic.Value>
      </Statistic>
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{ texAlign: "right" }}>
                  Incoming
                </Statistic.Label>
                <Statistic.Value>30.55</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" color="red">
                <Statistic.Label style={{ texAlign: "left" }}>
                  Expense
                </Statistic.Label>
                <Statistic.Value>10.55</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h5">History</Header>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              something
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              10
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered></Icon>
              <Icon name="trash" bordered></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="blue">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              something 2
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              10
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered></Icon>
              <Icon name="trash" bordered></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="green">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              something 3
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              10
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered></Icon>
              <Icon name="trash" bordered></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as="h3">Add new Transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input
            icon="tags"
            width={12}
            lable="Description"
            placeholder="New shinny thing"
          />
          <Form.Input
            icon="dollar"
            iconPosition="left"
            width="4"
            lable="Value"
            placeholder="100.00"
          />
        </Form.Group>
        <Button.Group style={{ marginTop: 20 }}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary>Ok</Button>
        </Button.Group>
      </Form>
    </Container>
  );
}

export default App;
