import Header from './Header'
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const SplitColumnBlock = (props) => (
  <Container className="split-column-block">
    <Row>
      <Col md="12">
        <h2 className="heading mb-5 text-center">{props.heading}</h2>
      </Col>
    </Row>
    <Row>
      <Col md="6">
        <p className="lead" dangerouslySetInnerHTML={{__html: props.leadText}} />
      </Col>
      <Col md="6" dangerouslySetInnerHTML={{__html: props.subtitle}} />
    </Row>
  </Container>
)

export default SplitColumnBlock
