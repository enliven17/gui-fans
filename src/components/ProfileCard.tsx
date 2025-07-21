import styled from 'styled-components';
import Image from 'next/image';

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 24px;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 24px rgba(0,0,0,0.2);
`;

const Avatar = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid ${({ theme }) => theme.colors.accent};
  margin-bottom: 16px;
`;

const Name = styled.h2`
  font-size: 1.3rem;
  margin: 0;
`;

const Username = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 4px 0 12px 0;
  font-size: 1rem;
`;

const Bio = styled.p`
  text-align: center;
  font-size: 1rem;
  margin-bottom: 16px;
`;

const ProfileButton = styled.button`
  background: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 10px 24px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 8px;
`;

const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
`;

const Stat = styled.div`
  text-align: center;
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  span {
    display: block;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

export default function ProfileCard() {
  return (
    <Card>
      <Avatar>
        <img src="https://randomuser.me/api/portraits/men/32.jpg" width={96} height={96} alt="Profile" />
      </Avatar>
      <StatRow>
        <Stat>
          <span>1984</span>
          Followers
        </Stat>
        <Stat>
          <span>1002</span>
          Following
        </Stat>
      </StatRow>
      <Name>Elviz Dizzouza</Name>
      <Username>@elvizoodem</Username>
      <Bio>⭐ Hello, I&apos;m UI / UX designer. Open to the new Project ⭐</Bio>
      <ProfileButton>My Profile</ProfileButton>
    </Card>
  );
}
