import styled from 'styled-components';
import { FaUserCheck } from 'react-icons/fa';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.activityBg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 22px 12px 12px 12px;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 2px 16px 0 rgba(124,58,237,0.08);
  border: 1.5px solid ${({ theme }) => theme.colors.memeBlue};
`;

const Title = styled.h3`
  font-size: 1.08rem;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.memePink};
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ActivityItem = styled.div`
  background: #1a1832;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 8px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border: 1.5px dashed ${({ theme }) => theme.colors.memePink};
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const Name = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accent2};
  font-size: 0.98rem;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Time = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.85rem;
`;

const Badge = styled.span`
  background: ${({ theme }) => theme.colors.memeBlue};
  color: #fff;
  border-radius: 8px;
  padding: 1px 7px;
  font-size: 0.78rem;
  margin-left: 3px;
  font-weight: 600;
  display: inline-block;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 5px;
`;

const RemoveButton = styled.button`
  background: none;
  color: ${({ theme }) => theme.colors.memePink};
  border: none;
  font-size: 0.92rem;
  cursor: pointer;
  font-weight: bold;
  border-radius: 16px;
  padding: 3px 10px;
  transition: color 0.2s, background 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.accent2};
    background: #2B2D4A;
  }
`;

const FrenBackButton = styled.button`
  background: ${({ theme }) => theme.colors.memeGreen};
  color: #18191A;
  border: none;
  border-radius: 16px;
  padding: 3px 12px;
  font-size: 0.92rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 1px 4px 0 rgba(0,255,163,0.08);
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.memeBlue};
    color: #fff;
  }
`;

const activities = [
  { name: 'George Jose', time: '3 min ago', badge: 'WAGMI 🚀' },
  { name: 'Michel', time: '3 min ago', badge: 'Diamond Hands 💎' },
  { name: 'Cristano', time: '3 min ago', badge: 'Meme Lord 🐶' },
  { name: 'Brahim diaz', time: '3 min ago', badge: 'Shitposter 😂' },
  { name: 'John wick', time: '3 min ago', badge: 'Fren' },
  { name: 'Abhilash Jose', time: '3 min ago', badge: 'HODL 🤲' },
];

export default function RecentActivity() {
  return (
    <Container>
      <Title>Recent Activity <span>🎉</span></Title>
      <List>
        {activities.map((a, i) => (
          <ActivityItem key={i}>
            <Info>
              <FaUserCheck color="#FFD600" size={16} />
              <div>
                <Name>{a.name} <Badge>{a.badge}</Badge></Name>
                <Time>Followed you · {a.time}</Time>
              </div>
            </Info>
            <ButtonRow>
              <RemoveButton>Yeet ✂️</RemoveButton>
              <FrenBackButton>Fren Back 🚀</FrenBackButton>
            </ButtonRow>
          </ActivityItem>
        ))}
      </List>
    </Container>
  );
}
