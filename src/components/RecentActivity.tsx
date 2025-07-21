import styled from 'styled-components';
import { FaUserCheck } from 'react-icons/fa';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.activityBg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 20px 16px;
  color: ${({ theme }) => theme.colors.text};
`;

const Title = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 16px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ActivityItem = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 12px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Name = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const Time = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.9rem;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 8px;
`;

const RemoveButton = styled.button`
  background: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: none;
  font-size: 0.95rem;
  cursor: pointer;
`;

const FollowBackButton = styled.button`
  background: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 4px 14px;
  font-size: 0.95rem;
  font-weight: bold;
  cursor: pointer;
`;

const activities = [
  { name: 'George Jose', time: '3 min ago' },
  { name: 'Michel', time: '3 min ago' },
  { name: 'Cristano', time: '3 min ago' },
  { name: 'Brahim diaz', time: '3 min ago' },
  { name: 'John wick', time: '3 min ago' },
  { name: 'Abhilash Jose', time: '3 min ago' },
];

export default function RecentActivity() {
  return (
    <Container>
      <Title>Recent Activity</Title>
      <List>
        {activities.map((a, i) => (
          <ActivityItem key={i}>
            <Info>
              <FaUserCheck color="#FFD600" size={18} />
              <div>
                <Name>{a.name}</Name>
                <Time>Followed on you . {a.time}</Time>
              </div>
            </Info>
            <ButtonRow>
              <RemoveButton>Remove</RemoveButton>
              <FollowBackButton>Follow Back</FollowBackButton>
            </ButtonRow>
          </ActivityItem>
        ))}
      </List>
    </Container>
  );
}
