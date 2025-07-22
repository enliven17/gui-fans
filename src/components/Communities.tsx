import styled from 'styled-components';

const Container = styled.div`
  margin-top: 32px;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  margin-bottom: 12px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CommunityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-weight: bold;
`;

const Friends = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.9rem;
`;

const communities = [
  {
    name: 'WAGMI Degens',
    img: 'https://i.imgur.com/4M34hi2.png',
    friends: 69,
    desc: 'To the moon 🚀',
  },
  {
    name: 'Meme Coiners',
    img: 'https://i.imgur.com/AA0WxrZ.jpeg', // Pepe meme (JPEG)
    friends: 42,
    desc: 'Shitposting 24/7 😂',
  },
  {
    name: 'Diamond Hands Club',
    img: 'https://i.imgur.com/2nCt3Sbl.jpg',
    friends: 33,
    desc: 'No paper hands allowed 💎',
  },
  {
    name: 'Shiba Army',
    img: 'https://assets.coingecko.com/coins/images/11939/large/shiba.png',
    friends: 88,
    desc: 'Woof woof 🐶',
  },
  {
    name: 'HODLers United',
    img: 'https://i.imgur.com/4M34hi2.png',
    friends: 21,
    desc: 'Never selling 🤲',
  },
];

export default function Communities() {
  return (
    <Container>
      <Title>Communities</Title>
      <List>
        {communities.map((c, i) => (
          <CommunityItem key={i}>
            <Avatar>
              <img src={c.img} width={36} height={36} alt={c.name} />
            </Avatar>
            <Info>
              <Name>{c.name}</Name>
              <Friends>{c.friends} frens • {c.desc}</Friends>
            </Info>
          </CommunityItem>
        ))}
      </List>
    </Container>
  );
}
