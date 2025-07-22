"use client";

import styled from 'styled-components';
import ProfileCard from '@/components/ProfileCard';
import Skills from '@/components/Skills';
import Communities from '@/components/Communities';
import PostCard from '@/components/PostCard';
import RecentActivity from '@/components/RecentActivity';
import TopBar from '@/components/TopBar';

const Wrapper = styled.div`
  min-height: 100vh;
  height: 100vh;
  background: linear-gradient(135deg, #1a1832 0%, #232447 100%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: repeating-linear-gradient(135deg, #FFD60011 0 2px, transparent 2px 40px);
    opacity: 0.18;
    pointer-events: none;
    z-index: 0;
    animation: moveGrid 12s linear infinite;
  }

  @keyframes moveGrid {
    0% { background-position: 0 0; }
    100% { background-position: 80px 80px; }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr 340px;
  gap: 56px;
  width: 98vw;
  max-width: 1800px;
  position: relative;
  z-index: 1;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 1800px) {
    width: 99vw;
    max-width: 1400px;
    grid-template-columns: 260px 1fr 260px;
    gap: 32px;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    width: 100vw;
    gap: 0;
    height: auto;
  }
`;

const LeftCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 0;
  box-shadow: 0 4px 32px 0 rgba(124,58,237,0.10);
  padding: 28px 24px 24px 24px;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const Center = styled.div`
  height: calc(100vh - 72px);
  overflow-y: auto;
  background: rgba(35,36,71,0.82);
  box-shadow: 0 8px 32px 0 rgba(124,58,237,0.10);
  backdrop-filter: blur(16px);
  border-radius: 0;
  border: 2px solid rgba(255,255,255,0.08);
`;
const Right = styled.div`
  background: rgba(35,36,71,0.85);
  box-shadow: none;
  backdrop-filter: none;
  border-radius: 0;
  border: none;
  margin-top: 0;
  height: 100%;
`;

export default function HomeScreen() {
  return (
    <>
      <TopBar />
      <Wrapper>
        <Grid>
          <LeftCard>
            <ProfileCard />
            <Communities />
          </LeftCard>
          <Center>
            <PostCard />
          </Center>
          <Right>
            <RecentActivity />
          </Right>
        </Grid>
      </Wrapper>
    </>
  );
} 