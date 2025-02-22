import { Blog } from './components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import styles from './App.module.css';
import classNames from 'classnames/bind';
import { useSelector, UseSelector } from 'react-redux';
const cx = classNames.bind(styles);

export interface blogApi {
  blogs: {
    id: number,
    heartColor: boolean,
    NumberOfHeart: number,
  }[]
}

// const api: blogApi = {
//   blogs: [
//     { id: 1, heartColor: false, NumberOfHeart: 0 },
//     { id: 2, heartColor: false, NumberOfHeart: 0 },
//     { id: 3, heartColor: false, NumberOfHeart: 0 },
//     { id: 4, heartColor: false, NumberOfHeart: 0 },
//     { id: 5, heartColor: false, NumberOfHeart: 0 },
//   ]
// }


function App() {
  const api = useSelector((state: blogApi) => state);
  return (
    <div className={cx("wrapper")}>

      <div className={cx("header")}>
        <h1>Blog</h1>
      </div>

      <div className={cx("blogs")}>
        {api.blogs.map(blog => (
          <Blog key={blog.id} id={blog.id} />
        ))}
      </div>
      <div className={cx("more")}>
        <FontAwesomeIcon icon={faCirclePlus} />
      </div>
    </div>
  );
}

export default App;
