import styled, { keyframes } from 'styled-components';
import { FaHome, FaBell, FaEnvelope, FaCog } from 'react-icons/fa';

const Bar = styled.div`
  width: 100vw;
  background: rgba(35,36,71,0.85);
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 32px 0 rgba(124,58,237,0.10);
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
`;

const logoGlow = keyframes`
  0% { box-shadow: 0 0 0 0 #FFD60044, 0 0 0 0 #7C3AED44; }
  50% { box-shadow: 0 0 16px 8px #FFD60044, 0 0 32px 16px #7C3AED44; }
  100% { box-shadow: 0 0 0 0 #FFD60044, 0 0 0 0 #7C3AED44; }
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Logo = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FFD600 0%, #7C3AED 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 4px #FFD60044, 0 0 0 0 #7C3AED44;
  animation: ${logoGlow} 2.5s infinite;
  overflow: hidden;
  border: 3px solid #fff3;
`;

const LogoImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

const LogoText = styled.span`
  font-family: 'Fredoka', Arial, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #FFD600;
  letter-spacing: 2px;
  text-shadow: 0 2px 12px #7C3AED88;
  background: linear-gradient(90deg, #FFD600 0%, #7C3AED 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: flicker 2.5s infinite alternate;

  @keyframes flicker {
    0% { opacity: 1; }
    90% { opacity: 1; }
    100% { opacity: 0.7; }
  }
`;

const Search = styled.input`
  background: #292A2D;
  border: 2px solid #FFD600;
  border-radius: 24px;
  padding: 10px 24px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  width: 340px;
  margin: 0 32px;
  outline: none;
  transition: border 0.2s;
  &::placeholder {
    color: #FFD600;
    opacity: 1;
    font-weight: 500;
  }
  &:focus {
    border: 2px solid #FFD600;
    background: #232447;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.accent};
`;

export default function TopBar() {
  return (
    <Bar>
      <Inner>
        <LogoWrap>
          <Logo>
            <LogoImg src="/assets/images/gui-bot.webp" alt="GUI Inu" />
          </Logo>
          <LogoText>GUI Fans</LogoText>
        </LogoWrap>
        <Search placeholder="#Explore" />
        <Icons>
          <FaHome size={22} color="#FFD600" />
          <FaBell size={22} />
          <FaEnvelope size={22} />
          <FaCog size={22} />
          <Avatar>
            <img src="/assets/images/profile.jpeg" width={36} height={36} alt="Profile" />
          </Avatar>
        </Icons>
      </Inner>
    </Bar>
  );
} 