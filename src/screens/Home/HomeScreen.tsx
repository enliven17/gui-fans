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
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 16px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr 340px;
  gap: 56px;
  width: 98vw;
  max-width: 1800px;

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
  }
`;

const Left = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;
const Center = styled.div`
  @media (max-width: 900px) {
    grid-column: 1;
  }
`;
const Right = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;

export default function HomeScreen() {
  return (
    <>
      <TopBar />
      <Wrapper>
        <Grid>
          <Left>
            <ProfileCard />
            <Skills />
            <Communities />
          </Left>
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