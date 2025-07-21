import styled from 'styled-components';

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 28px 24px 24px 24px;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 32px 0 rgba(124,58,237,0.10);
  border: 3px solid ${({ theme }) => theme.colors.memePink};
`;

const Avatar = styled.div`
  width: 104px;
  height: 104px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid ${({ theme }) => theme.colors.accent2};
  margin-bottom: 16px;
  box-shadow: 0 0 0 6px ${({ theme }) => theme.colors.memeBlue};
`;

const Name = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.accent2};
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Username = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 4px 0 12px 0;
  font-size: 1.1rem;
`;

const Bio = styled.p`
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 16px;
`;

const MemeBadge = styled.div`
  background: ${({ theme }) => theme.colors.memePink};
  color: #fff;
  border-radius: 16px;
  padding: 4px 16px;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
  box-shadow: 0 2px 8px 0 rgba(255,97,210,0.10);
`;

const ProfileButton = styled.button`
  background: ${({ theme }) => theme.colors.accent2};
  color: #fff;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 12px 32px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 8px;
  box-shadow: 0 2px 12px 0 rgba(124,58,237,0.12);
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.memePink};
  }
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
  font-size: 1.1rem;
  span {
    display: block;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

export default function ProfileCard() {
  return (
    <Card>
      <Avatar>
        <img src="https://randomuser.me/api/portraits/men/32.jpg" width={104} height={104} alt="Profile" />
      </Avatar>
      <MemeBadge>🐶 Meme Lord</MemeBadge>
      <StatRow>
        <Stat>
          <span>1984</span>
          Frenz
        </Stat>
        <Stat>
          <span>1002</span>
          Following Degens
        </Stat>
      </StatRow>
      <Name>Elviz Dizzouza <span>🔥</span></Name>
      <Username>@elvizoodem</Username>
      <Bio>⭐ WAGMI! GUI Inu SocialFi Meme Den'e hoşgeldin! ⭐</Bio>
      <ProfileButton>My Meme Den</ProfileButton>
    </Card>
  );
}
