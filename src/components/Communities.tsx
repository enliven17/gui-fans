import styled from 'styled-components';
import Image from 'next/image';

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
`;

const Friends = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.9rem;
`;

const communities = [
  {
    name: 'UX Designer community',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=64&h=64',
    friends: 32,
  },
  {
    name: 'Front end developers',
    img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=64&h=64',
    friends: 12,
  },
  {
    name: 'Back end developers',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=64&h=64',
    friends: 41,
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
              <Friends>{c.friends} your friends are in</Friends>
            </Info>
          </CommunityItem>
        ))}
      </List>
    </Container>
  );
}
