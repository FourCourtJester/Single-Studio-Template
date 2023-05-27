// Import core components
import { Col, Row } from 'react-bootstrap'

// Import our components
import { Countdown, Cycle, ResetButton, SwapButton, Timer, Toggle, Variable } from 'components/studio'

// Import style
// ...

const name = 'Example Template'

function Studio() {
  return (
    <>
      <Row>
        <Col>
          <Row>
            <Col>
              <legend className="m-0">Player One</legend>
            </Col>
            <Col xs="auto">
              <SwapButton
                fields={[
                  'players.1.displayName',
                  'players.1.score',
                  'players.1.alliance',
                  'players.1.deck.faction',
                  'players.2.displayName',
                  'players.2.score',
                  'players.2.alliance',
                  'players.2.deck.faction',
                ]}
                label="Players"
              />
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <legend className="m-0">Player Two</legend>
            </Col>
            <Col xs="auto">
              <ResetButton
                fields={[
                  'variables.players.1.displayName',
                  'variables.players.1.score',
                  'variables.players.1.alliance',
                  'variables.players.1.deck.faction',
                  'variables.players.2.displayName',
                  'variables.players.2.score',
                  'variables.players.2.alliance',
                  'variables.players.2.deck.faction',
                ]}
                label="Players"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        {[1, 2].map((i) => (
          <Col key={i}>
            <Row>
              <Col>
                <Row className="gx-2">
                  <Col>
                    <Variable label="Player Name" name={`players.${i}.displayName`} />
                  </Col>
                  <Col xs={4} md={3} lg={2}>
                    <Variable as="number" label="Score" name={`players.${i}.score`} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
      <Row>
        {[1, 2].map((i) => (
          <Col key={i}>
            <Row>
              <Col>
                <Row className="gx-2">
                  <Col>
                    <Variable label="Alliance" name={`players.${i}.alliance`} />
                  </Col>
                  <Col xs={4} md={3} lg={2}>
                    <Cycle name={`players.${i}.deck.faction`} choices={['GDI', 'Nod']} image="logos/:choice:.png" variant="link" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <legend>Series</legend>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <Row className="gx-2 h-100">
            <Col>
              <Timer label="Timer" name="countdown" />
            </Col>
          </Row>
        </Col>
        <Col className="mt-2 mt-sm-0" xs={12} sm={6}>
          <Row className="gx-2 h-100">
            <Col>
              <Countdown as="time" label="Countdown" name="launch" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <Row className="gx-2">
            <Col>
              <Variable label="Round" name="series.round" />
            </Col>
          </Row>
        </Col>
        <Col className="mt-2 mt-sm-0" xs={12} sm={6}>
          <Row className="gx-2">
            <Col>
              <Variable as="number" label="Game" name="series.game.current" />
            </Col>
            <Col className="d-flex align-items-center" xs="auto">
              <span>of</span>
            </Col>
            <Col>
              <Variable as="number" label="Limit" name="series.game.max" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <legend>Toggles</legend>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row className="gx-2">
            <Col>
              <Toggle label="Missiles One" name="missiles.one" group={['missiles.one', 'missiles.two']} />
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="gx-2">
            <Col>
              <Toggle label="Missiles Two" name="missiles.two" group={['missiles.one', 'missiles.two']} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

// Exported Component for use
export { name, Studio }
