import styled from 'styled-components';
import { FaHome, FaBell, FaEnvelope, FaCog } from 'react-icons/fa';
import Image from 'next/image';

const Bar = styled.div`
  width: 100vw;
  background: ${({ theme }) => theme.colors.card};
  padding: 0;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.12);
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

const Logo = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const Search = styled.input`
  background: #292A2D;
  border: 2px solid #FFD600;
  border-radius: 24px;
  padding: 10px 24px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.05rem;
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
    background: #232427;
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
        <Logo>
          <span>◯</span>
        </Logo>
        <Search placeholder="#Explore" />
        <Icons>
          <FaHome size={22} color="#FFD600" />
          <FaBell size={22} />
          <FaEnvelope size={22} />
          <FaCog size={22} />
          <Avatar>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" width={36} height={36} alt="Profile" />
          </Avatar>
        </Icons>
      </Inner>
    </Bar>
  );
} 