import styled, { keyframes } from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { FaLock, FaUnlock } from 'react-icons/fa';
import Confetti from 'react-confetti';
import ReactDOM from 'react-dom';

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 20px 20px 12px 20px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 48px;
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

const PostImageWrap = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  overflow: hidden;
  margin-bottom: 12px;
  border: 2px solid ${({ theme }) => theme.colors.memeBlue};
  position: relative;
`;

const PostImage = styled.img<{ $blurred: boolean }>`
  width: 100%;
  height: auto;
  filter: ${({ $blurred }) => ($blurred ? 'blur(64px) brightness(0.3)' : 'none')};
  transition: filter 0.3s;
`;

const lockBounce = keyframes`
  0% { transform: translateY(0) scale(1); filter: drop-shadow(0 0 8px #FFD60088); }
  50% { transform: translateY(-10px) scale(1.1); filter: drop-shadow(0 0 16px #FFD600cc); }
  100% { transform: translateY(0) scale(1); filter: drop-shadow(0 0 8px #FFD60088); }
`;

const LockOverlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 2.5rem;
  background: rgba(35,36,71,0.32);
  z-index: 2;
  svg {
    animation: ${lockBounce} 1.5s infinite;
  }
`;

const ProgressBarWrap = styled.div`
  width: 100%;
  background: #232447;
  border-radius: 12px;
  height: 18px;
  margin: 10px 0 6px 0;
  overflow: hidden;
  border: 1.5px solid #FFD60044;
`;

const ProgressBar = styled.div<{ percent: number }>`
  height: 100%;
  background: linear-gradient(90deg, #FFD600 0%, #7C3AED 100%);
  width: ${({ percent }) => percent}%;
  transition: width 0.3s;
`;

const ProgressText = styled.div`
  font-size: 0.98rem;
  color: #FFD600;
  font-weight: 600;
  margin-bottom: 4px;
`;

const PayRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
`;

const PayInput = styled.input`
  width: 60px;
  padding: 4px 8px;
  border-radius: 8px;
  border: 1.5px solid #FFD600;
  background: #18191A;
  color: #FFD600;
  font-size: 1rem;
  text-align: center;
`;

const PayButton = styled.button`
  background: linear-gradient(90deg, #FFD600 0%, #7C3AED 100%);
  color: #18191A;
  border: none;
  border-radius: 8px;
  padding: 6px 18px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: linear-gradient(90deg, #7C3AED 0%, #FFD600 100%);
    color: #fff;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 10px;
`;

const StashButton = styled.button<{ $bounce?: boolean }>`
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
  transition: background 0.2s, transform 0.15s;
  &:hover {
    background: ${({ theme }) => theme.colors.accent2};
    transform: scale(1.08) rotate(-4deg);
    filter: drop-shadow(0 0 8px #FFD60088);
  }
  ${({ $bounce }) => $bounce && `animation: bounce 0.4s;`}
  @keyframes bounce {
    0% { transform: scale(1) translateY(0); }
    30% { transform: scale(1.13) translateY(-8px); }
    60% { transform: scale(0.97) translateY(2px); }
    100% { transform: scale(1) translateY(0); }
  }
`;

const TierBadge = styled.span<{ color: string }>`
  background: ${({ color }) => color};
  color: #18191A;
  border-radius: 12px;
  padding: 2px 12px;
  font-size: 0.95rem;
  font-weight: bold;
  margin-left: 10px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(20,20,30,0.55);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalBox = styled.div`
  background: #232447;
  border-radius: 18px;
  box-shadow: 0 8px 32px 0 rgba(124,58,237,0.18);
  padding: 32px 32px 24px 32px;
  min-width: 320px;
  color: #FFD600;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const ModalTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 18px;
  color: #FFD600;
`;
const ModalActions = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 18px;
`;
const ModalButton = styled.button`
  background: linear-gradient(90deg, #FFD600 0%, #7C3AED 100%);
  color: #18191A;
  border: none;
  border-radius: 8px;
  padding: 8px 28px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: linear-gradient(90deg, #7C3AED 0%, #FFD600 100%);
    color: #fff;
  }
`;

const postsData = [
  {
    id: 1,
    user: 'George Jose',
    username: '@george',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    time: '1 hour ago',
    text: 'When $GUI goes to the moon 🚀🌕',
    image: 'https://i.imgflip.com/30b1gx.jpg', // Drake meme
    locked: true,
    currentAmount: 40,
    targetAmount: 100,
    contributors: [],
    tier: { label: 'Diamond Hands', color: '#00FFA3', emoji: '💎' },
  },
  {
    id: 2,
    user: 'Meme Lord',
    username: '@memelord',
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
    time: '2 hours ago',
    text: 'Diamond hands only 💎🙌',
    image: 'https://i.imgflip.com/1ur9b0.jpg', // Distracted boyfriend
    locked: true,
    currentAmount: 20,
    targetAmount: 60,
    contributors: [],
    tier: { label: 'Meme Lord', color: '#FF61D2', emoji: '🐶' },
  },
  {
    id: 3,
    user: 'Shiba Queen',
    username: '@shibaqueen',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    time: '3 hours ago',
    text: 'WAGMI frens! 🐶🔥',
    image: 'https://i.imgflip.com/26am.jpg', // Doge meme
    locked: true,
    currentAmount: 0,
    targetAmount: 50,
    contributors: [],
    tier: { label: 'Shitposter', color: '#FFD600', emoji: '😂' },
  },
];

const currentUser = 'user1'; // demo user

type PostType = Omit<typeof postsData[number], 'contributors'> & { contributors: string[] };

const EmojiButton = styled.span`
  font-size: 1.3rem;
  cursor: pointer;
  display: inline-block;
  transition: transform 0.15s;
  &:hover {
    transform: scale(1.35) rotate(-8deg);
    filter: drop-shadow(0 0 8px #FFD60088);
  }
  &.bounce {
    animation: bounce 0.4s;
  }
  @keyframes bounce {
    0% { transform: scale(1) translateY(0); }
    30% { transform: scale(1.3) translateY(-8px); }
    60% { transform: scale(0.95) translateY(2px); }
    100% { transform: scale(1) translateY(0); }
  }
`;

export default function PostCard() {
  const [posts, setPosts] = useState<PostType[]>(postsData as PostType[]);
  const [payInputs, setPayInputs] = useState(postsData.map(() => ''));
  const [confetti, setConfetti] = useState(postsData.map(() => false));
  const [modal, setModal] = useState<{open: boolean, idx: number, amount: number} | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cardSizes, setCardSizes] = useState<{width: number, height: number}[]>(postsData.map(() => ({width: 0, height: 0})));
  const [emojiBounce, setEmojiBounce] = useState(postsData.map(() => [false, false, false]));
  const [stashBounce, setStashBounce] = useState(postsData.map(() => false));

  useEffect(() => {
    setCardSizes(cardRefs.current.map(ref => ref ? { width: ref.offsetWidth, height: ref.offsetHeight } : { width: 0, height: 0 }));
  }, [posts, confetti]);

  const handlePay = (idx: number) => {
    let amount = parseInt(payInputs[idx]);
    if (isNaN(amount)) amount = 1;
    if (amount < 1) amount = 1;
    const maxPay = posts[idx].targetAmount - posts[idx].currentAmount;
    if (amount > maxPay) amount = maxPay;
    if (maxPay <= 0) return; // already full
    setModal({ open: true, idx, amount });
  };

  const confirmPay = () => {
    if (!modal) return;
    const idx = modal.idx;
    const amount = modal.amount;
    const updatedPosts = posts.map((p, i) => i === idx ? { ...p, contributors: [...p.contributors] } : p);
    updatedPosts[idx].currentAmount += amount;
    if (!updatedPosts[idx].contributors.includes(currentUser)) {
      updatedPosts[idx].contributors = [...updatedPosts[idx].contributors, currentUser];
    }
    let unlocked = false;
    if (updatedPosts[idx].currentAmount >= updatedPosts[idx].targetAmount) {
      updatedPosts[idx].locked = false;
      updatedPosts[idx].currentAmount = updatedPosts[idx].targetAmount;
      unlocked = true;
    }
    setPosts(updatedPosts);
    setPayInputs(inputs => inputs.map((v, i) => (i === idx ? '' : v)));
    setModal(null);
    if (unlocked) {
      setConfetti(arr => arr.map((v, i) => i === idx ? true : v));
      setTimeout(() => {
        setConfetti(arr => arr.map((v, i) => i === idx ? false : v));
      }, 2000);
    }
  };

  const handleEmoji = (postIdx: number, emojiIdx: number) => {
    setEmojiBounce(arr => arr.map((row, i) => i === postIdx ? row.map((v, j) => j === emojiIdx ? true : v) : row));
    setTimeout(() => {
      setEmojiBounce(arr => arr.map((row, i) => i === postIdx ? row.map((v, j) => j === emojiIdx ? false : v) : row));
    }, 400);
  };

  const handleStash = (postIdx: number) => {
    setStashBounce(arr => arr.map((v, i) => i === postIdx ? true : v));
    setTimeout(() => {
      setStashBounce(arr => arr.map((v, i) => i === postIdx ? false : v));
    }, 400);
  };

  return (
    <>
      {modal && modal.open && ReactDOM.createPortal(
        <ModalOverlay>
          <ModalBox>
            <ModalTitle>Confirm Contribution</ModalTitle>
            <div style={{color:'#fff',marginBottom:12}}>Are you sure you want to contribute <b style={{color:'#FFD600'}}>{modal.amount} $GUI</b>?</div>
            <ModalActions>
              <ModalButton onClick={confirmPay}>Yes</ModalButton>
              <ModalButton style={{background:'#232447',color:'#FFD600',border:'1.5px solid #FFD600'}} onClick={()=>setModal(null)}>No</ModalButton>
            </ModalActions>
          </ModalBox>
        </ModalOverlay>,
        document.body
      )}
      {posts.map((post, i) => {
        const percent = Math.min(100, (post.currentAmount / post.targetAmount) * 100);
        const isContributor = post.contributors.includes(currentUser);
        const isUnlocked = post.currentAmount >= post.targetAmount && isContributor;
        const isLocked = post.currentAmount < post.targetAmount;
        return (
          <Card key={post.id} ref={el => { cardRefs.current[i] = el; }} style={{position:'relative'}}>
            {confetti[i] && cardSizes[i].width > 0 && cardSizes[i].height > 0 && (
              <div style={{position:'absolute',left:0,top:0,width:'100%',height:'100%',zIndex:10,pointerEvents:'none'}}>
                <Confetti width={cardSizes[i].width} height={cardSizes[i].height} numberOfPieces={120} recycle={false} />
              </div>
            )}
            <Header>
              <Avatar>
                <img src={post.avatar} width={44} height={44} alt={post.user} />
              </Avatar>
              <UserInfo>
                <Name>{post.user} <Time>. {post.time}</Time>{post.tier && <TierBadge color={post.tier.color}>{post.tier.emoji} {post.tier.label}</TierBadge>}</Name>
                <Username>{post.username}</Username>
              </UserInfo>
            </Header>
            <Content>{post.text}</Content>
            <PostImageWrap>
              <PostImage src={post.image} $blurred={!isUnlocked} alt="Post" />
              {!isUnlocked && (
                <LockOverlay>
                  <FaLock />
                </LockOverlay>
              )}
            </PostImageWrap>
            <ProgressText>{post.currentAmount} / {post.targetAmount} $GUI raised</ProgressText>
            <ProgressBarWrap>
              <ProgressBar percent={percent} />
            </ProgressBarWrap>
            {isLocked && (
              <>
                <PayRow>
                  <PayInput
                    type="number"
                    min={1}
                    max={post.targetAmount - post.currentAmount}
                    value={payInputs[i]}
                    onChange={e => {
                      let v = e.target.value;
                      if (parseInt(v) > post.targetAmount - post.currentAmount) v = String(post.targetAmount - post.currentAmount);
                      setPayInputs(inputs => inputs.map((val, idx) => idx === i ? v : val));
                    }}
                  />
                  <span>$GUI</span>
                  <PayButton onClick={() => handlePay(i)} disabled={post.currentAmount >= post.targetAmount}>
                    Contribute
                  </PayButton>
                </PayRow>
                <div style={{fontSize:'0.92rem',color:'#FFD600',marginBottom:6}}>
                  {post.contributors.length} contributor{post.contributors.length !== 1 ? 's' : ''}
                </div>
              </>
            )}
            <Actions>
              <EmojiButton className={emojiBounce[i][0] ? 'bounce' : ''} onClick={() => handleEmoji(i,0)}>❤️‍🔥</EmojiButton>
              <EmojiButton className={emojiBounce[i][1] ? 'bounce' : ''} onClick={() => handleEmoji(i,1)}>😂</EmojiButton>
              <EmojiButton className={emojiBounce[i][2] ? 'bounce' : ''} onClick={() => handleEmoji(i,2)}>🚀</EmojiButton>
              <StashButton $bounce={stashBounce[i]} onClick={() => handleStash(i)}>Stash 🚀</StashButton>
            </Actions>
          </Card>
        );
      })}
    </>
  );
}
