import styled from 'styled-components';
import Image from 'next/image';
import { FaRegHeart, FaRegComment, FaRegPaperPlane } from 'react-icons/fa';

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 20px 20px 12px 20px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 24px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 1.05rem;
`;

const Username = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
`;

const Time = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.95rem;
  margin-left: 6px;
`;

const Content = styled.div`
  margin: 10px 0 14px 0;
  font-size: 1rem;
`;

const PostImage = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  overflow: hidden;
  margin-bottom: 12px;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 10px;
`;

const SaveButton = styled.button`
  background: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 6px 24px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  margin-left: auto;
`;

export default function PostCard() {
  return (
    <Card>
      <Header>
        <Avatar>
          <img src="https://randomuser.me/api/portraits/men/12.jpg" width={40} height={40} alt="Jhon" />
        </Avatar>
        <UserInfo>
          <Name>George Jose <Time>. 1 hour ago</Time></Name>
          <Username>@george</Username>
        </UserInfo>
      </Header>
      <Content>Lorem ipsum dolor sit amet consectetur. Porttitor.</Content>
      <PostImage>
        <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=500&q=80" width={500} height={300} alt="Post" style={{ width: '100%', height: 'auto' }} />
      </PostImage>
      <Actions>
        <FaRegHeart size={22} />
        <FaRegComment size={22} />
        <FaRegPaperPlane size={22} />
        <SaveButton>Save</SaveButton>
      </Actions>
    </Card>
  );
}
