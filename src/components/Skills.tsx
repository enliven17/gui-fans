import styled from 'styled-components';

const Container = styled.div`
  margin-top: 24px;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  margin-bottom: 12px;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Skill = styled.div`
  background: ${({ theme }) => theme.colors.skillBg};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 6px 16px;
  font-size: 0.95rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const skills = [
  'UX Designer',
  'Front end and Back End developer',
  'JS coder',
  'UX Designer',
  'UX Designer',
];

export default function Skills() {
  return (
    <Container>
      <Title>Skills</Title>
      <SkillsList>
        {skills.map((skill, i) => (
          <Skill key={i}>{skill}</Skill>
        ))}
      </SkillsList>
    </Container>
  );
}
