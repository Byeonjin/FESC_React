import PropTypes from 'prop-types';
import classes from './Nav.module.scss';
import { A11yHidden } from '@/components';

export function Nav({ as, headline, list, ...restProps }) {
  return (
    <nav {...restProps}>
      <A11yHidden as={as}>{headline}</A11yHidden>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <a href={item.to}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Nav.defaultProps = {
  list: [] /* [{ id: string, to: string, text: string }] */,
  as: 'h2', // 이것들 중 하나 'h2', 'h3', 'h4', 'h5', 'h6'
};

Nav.propTypes = {};
