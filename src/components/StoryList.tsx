import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px 0;
  overflow-x: auto;
`;

const StoryAvatar = styled.div<{ active?: boolean }>`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${({ theme, active }) => active ? theme.colors.accent : theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Name = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  text-align: center;
  margin-top: 4px;
`;

const StoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const users = [
  { name: 'Sinan pk', img: 'https://randomuser.me/api/portraits/men/11.jpg', active: true },
  { name: 'Jhon', img: 'https://randomuser.me/api/portraits/men/12.jpg', active: false },
  { name: 'Rishal', img: 'https://randomuser.me/api/portraits/women/13.jpg', active: false },
  { name: 'Fedrick', img: 'https://randomuser.me/api/portraits/men/14.jpg', active: false },
  { name: 'David', img: 'https://randomuser.me/api/portraits/men/15.jpg', active: false },
  { name: 'Chris', img: 'https://randomuser.me/api/portraits/women/16.jpg', active: true },
];

export default function StoryList() {
  return (
    <Container>
      {users.map((user, i) => (
        <StoryItem key={i}>
          <StoryAvatar active={user.active}>
            <img src={user.img} width={48} height={48} alt={user.name} />
          </StoryAvatar>
          <Name>{user.name}</Name>
        </StoryItem>
      ))}
    </Container>
  );
}
