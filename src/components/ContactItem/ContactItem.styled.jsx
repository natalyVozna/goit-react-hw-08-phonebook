import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  justify-content: space-between;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.3;
  padding-right: 4px;
`;
export const Cover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  text-transform: uppercase;
  width: 50px;
  min-width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 1px 3px 8px rgb(33 33 33 / 30%);
`;
export const InfoBox = styled.div`
  display: flex;
  width: calc(100% - 115px);
  flex-direction: column;
`;

export const Info = styled.span`
  margin-left: 10px;
  font-weight: 700;
  font-size: 20px;
  color: var(--text);
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Text = styled(Info)`
  margin-left: 10px;
  font-weight: 400;
  font-size: 12px;
`;

export const DeleteButton = styled.button`
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 13px;
  margin-left: 16px;
  border-radius: 4px;
  line-height: 1;
  color: var(--red);
  transition: transform 250ms var(--timing-function);
  width: 32px;
  height: 32px;

  :active,
  :hover {
    transform: scale(1.1);

    svg {
      fill: var(--red);
    }
  }

  svg {
    min-width: 30px;
    width: 30px;
    fill: var(--gray);
  }
`;
