import styled from 'styled-components';

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 20px 20px 12px 20px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 32px;
  box-shadow: 0 4px 32px 0 rgba(124,58,237,0.08);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.colors.memePink};
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.accent2};
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
  font-size: 1.05rem;
`;

const PostImage = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  overflow: hidden;
  margin-bottom: 12px;
  border: 2px solid ${({ theme }) => theme.colors.memeBlue};
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 10px;
`;

const StashButton = styled.button`
  background: ${({ theme }) => theme.colors.memePink};
  color: #fff;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 7px 28px;
  font-weight: bold;
  font-size: 1.05rem;
  cursor: pointer;
  margin-left: auto;
  box-shadow: 0 2px 12px 0 rgba(255,97,210,0.12);
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.accent2};
  }
`;

const posts = [
  {
    user: 'George Jose',
    username: '@george',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    time: '1 hour ago',
    text: 'When $GUI goes to the moon 🚀🌕',
    image: 'https://i.imgur.com/8Km9tLL.jpg',
  },
  {
    user: 'Meme Lord',
    username: '@memelord',
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
    time: '2 hours ago',
    text: 'Diamond hands only 💎🙌',
    image: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
  {
    user: 'Shiba Queen',
    username: '@shibaqueen',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    time: '3 hours ago',
    text: 'WAGMI frens! 🐶🔥',
    image: 'https://i.imgur.com/4M34hi2.png',
  },
];

export default function PostCard() {
  return (
    <>
      {posts.map((post, i) => (
        <Card key={i}>
          <Header>
            <Avatar>
              <img src={post.avatar} width={44} height={44} alt={post.user} />
            </Avatar>
            <UserInfo>
              <Name>{post.user} <Time>. {post.time}</Time></Name>
              <Username>{post.username}</Username>
            </UserInfo>
          </Header>
          <Content>{post.text}</Content>
          <PostImage>
            <img src={post.image} width={500} height={300} alt="Post" style={{ width: '100%', height: 'auto' }} />
          </PostImage>
          <Actions>
            <span style={{fontSize:'1.3rem',cursor:'pointer'}}>❤️‍🔥</span>
            <span style={{fontSize:'1.3rem',cursor:'pointer'}}>😂</span>
            <span style={{fontSize:'1.3rem',cursor:'pointer'}}>🚀</span>
            <StashButton>Stash 🚀</StashButton>
          </Actions>
        </Card>
      ))}
    </>
  );
}
