import React from 'react';
import { Row, Col } from 'components/atoms/Grid';
import GameCard from 'components/organisms/GameCard';

export default ({ games = [{ name: '', href: '', image: '' }] }) => (
  <Row>
    {games.map((game, i) => (
      <Col key={i} width={[1 / 3, 1 / 4]} p={1}>
        <GameCard imgPath={game.image} name={game.name} href={game.href} />
      </Col>
    ))}
  </Row>
);
