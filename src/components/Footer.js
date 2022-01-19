import React, {useState} from 'react';
import styled from 'styled-components';
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from '../constants/TodoFilters';

const FooterPanel = styled.ul`
display: flex;
justify-content: center;
position: absolute;
left: 0;
right: 0;
margin: auto;
top: 5px;

@media (max-width: 450px) {
  top: 36px;
}
`;

const FooterList = styled.li`
list-style: none;
`;

const FooterText = styled.span`
font-size: 14px;
position: absolute;
top: 12px;
left: 15px;
`;

const FooterListBtn = styled.button`
border-radius: 3px;
border: 1px solid rgba(175, 47, 47, 0.2);
background: transparent;
margin: 3px;
padding: 3px 7px;
cursor: pointer;
color: #777;
`;

const FooterBtn = styled.button`
position: absolute;
top: 12px;
right: 15px;
border: none;
background: transparent;
cursor: pointer;
color: #777;
&:hover {
  text-decoration: underline;
}
`;

function Footer(props) {
  const [toggle, setToggle] = useState(false);

  const FILTER_TITLES = {
    [SHOW_ALL]: 'All',
    [SHOW_ACTIVE]: 'Active',
    [SHOW_COMPLETED]: 'Completed',
  };

  const renderTodoCount = () => {
    const { activeCount } = props;
    const itemWord = activeCount === 1 ? 'item' : 'items';

    return (
      <FooterText>
        {activeCount || 'No'}
        {" "}
        {itemWord}
        {" "}
        left
      </FooterText>
    );
  };

  const renderFilterLink = (filter) => {
    const title = FILTER_TITLES[filter];
    const { filter: [], onShow } = props;

    return (
      <FooterListBtn
        type="button"
        onClick={() => {onShow(filter); setToggle(true);}}
      >
        {title}
      </FooterListBtn>
    );
  };

  function renderClearButton() {
    const { completedCount, onClearCompleted } = props;
    if (completedCount > 0) {
      return (
        <FooterBtn
          type="button"
          onClick={onClearCompleted}
        >
          Clear completed
        </FooterBtn>
      );
    }
  }

  return (
    <>
      {renderTodoCount()}
      <FooterPanel>
        {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map((filter) => (
          <FooterList key={filter}>
            {renderFilterLink(filter)}
          </FooterList>
        ))}
      </FooterPanel>
      {renderClearButton()}
    </>
  );
}

export default Footer;
