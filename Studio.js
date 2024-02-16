// Import core components
import { Col, Row } from 'react-bootstrap'

// Import our components
import { Break, Countdown, Cycle, Leaderboard, MathButton, ResetButton, SwapButton, Timer, Toggle, Variable } from 'components/studio'

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
              <SwapButton fields={['variables.players.1', 'variables.players.2']} label="Players" placement="left" />
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <legend className="m-0">Player Two</legend>
            </Col>
            <Col xs="auto">
              <ResetButton fields={['variables.players']} label="Players" placement="left" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        {[1, 2].map((i) => (
          <Col key={i}>
            <Row>
              <Col>
                <Row className="g-2">
                  <Col>
                    <Variable label="Player Name" name={`players.${i}.displayName`} />
                  </Col>
                  <Break className="d-block d-md-none" />
                  <Col className="col" md={3} lg={3} xl={2}>
                    <Variable as="number" label="Score" name={`players.${i}.score`} />
                  </Col>
                  <Col xs="auto">
                    <MathButton type="increment" name={`players.${i}.score`} />
                  </Col>
                  <Col xs="auto">
                    <MathButton type="decrement" name={`players.${i}.score`} />
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
                <Row className="g-2">
                  <Col>
                    <Variable label="Alliance" name={`players.${i}.alliance`} />
                  </Col>
                  <Col xs={4} md={3} lg={2}>
                    <Cycle label="Faction" name={`players.${i}.deck.faction`} choices={['GDI', 'Nod']} image="logos/:choice:.png" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
      <hr />
      <Row>
        <Col>
          <legend>Timers</legend>
        </Col>
      </Row>
      <Row className="g-2">
        <Col xs={12} sm={6}>
          <Row>
            <Col>
              <Timer label="Timer" name="countdown" />
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={6}>
          <Row>
            <Col>
              <Countdown as="time" label="Countdown" name="launch" />
            </Col>
          </Row>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <legend>Series</legend>
        </Col>
      </Row>
      <Row className="g-2">
        <Col xs={12} sm={6}>
          <Row>
            <Col>
              <Variable label="Round" name="series.round" />
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={6}>
          <Row className="g-2">
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
      <hr />
      <Leaderboard label="Top 10 Leaderboard" name="leaderboard" rows={10} />
      <hr />
      <Row>
        <Col>
          <legend>Toggles</legend>
        </Col>
        <Col xs="auto">
          <ResetButton fields={['toggles.missile', 'variables.map']} label="Map & Missiles" placement="left" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Row className="g-2">
            <Col>
              <Toggle icon="rocket" name="missile.1.player.1" group={['missile.1.player.1', 'missile.1.player.2']} />
            </Col>
            <Col>
              <Toggle icon="rocket" name="missile.2.player.1" group={['missile.2.player.1', 'missile.2.player.2']} />
            </Col>
            <Col>
              <Toggle icon="rocket" name="missile.3.player.1" group={['missile.3.player.1', 'missile.3.player.2']} />
            </Col>
          </Row>
        </Col>
        <Break className="d-block d-sm-none" />
        <Col>
          <Row className="g-2">
            <Col>
              <Toggle icon="rocket" name="missile.1.player.2" variant="danger" group={['missile.1.player.1', 'missile.1.player.2']} />
            </Col>
            <Col>
              <Toggle icon="rocket" name="missile.2.player.2" variant="danger" group={['missile.2.player.1', 'missile.2.player.2']} />
            </Col>
            <Col>
              <Toggle icon="rocket" name="missile.3.player.2" variant="danger" group={['missile.3.player.1', 'missile.3.player.2']} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

// Exported Component for use
export { name, Studio }
