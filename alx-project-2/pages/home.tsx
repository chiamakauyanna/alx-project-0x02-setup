import Card from '@/components/common/Card'
import { CardProps } from '@/interfaces';
import React from 'react';

const home: React.FC<CardProps> = () => {
  const cardsData = [
      { title: "Card 1", content: "This is the content of card 1." },
      { title: "Card 2", content: "This is the content of card 2." },
      { title: "Card 3", content: "This is the content of card 3." },
  ];
  return (
      <div>
          <h1>This is the home page</h1>

          {cardsData.map((card, index) => (
              <div key={index}>
                  <Card title={card.title} content={card.content} />
              </div>
          ))}
      </div>
  );
}

export default home