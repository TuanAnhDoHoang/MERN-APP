import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind';
import { faEllipsisVertical, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { changeHeartColor } from '../redux/actions';
import style from './blog.module.scss';


const cx = classNames.bind(style);
interface Props {
    id: number,
};
interface blogApi {
    blogs: {
        id: number,
        heartColor: boolean,
        NumberOfHeart: number
    }[],
};
function Blog(props: Props) {
    const { id } = props;
    const dispatch = useDispatch();
    const handleHeart = () => {
        dispatch(changeHeartColor(id));
    }
    const blog = useSelector((state: blogApi) => state.blogs.find(b => b.id === id));
    return (
        <div className={cx('wrapper')}>
            <div className={cx("info")}>
                <img className={cx("user-avatar")} src="https://yt3.ggpht.com/KloVINtkZ7HU3Kis9TEYEV3KC0oBLblZN285Oqrgg3SXhvWZtz3RQIv6Kaa_-bHNXY-lUkks=s88-c-k-c0x00ffffff-no-rj" alt="avarta" />
                <div className={cx("name-date")}>
                    <a className={cx('user-name')} href=''>Anouymous</a>
                    <p className={cx('date-time')}>12:04 Apr 21.2021</p>
                </div>
                <div className={cx("icon-blog")}>

                    <FontAwesomeIcon className={cx('menu')} icon={faEllipsisVertical} />
                </div>
            </div>
            <img className={cx("content-img")} src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/480596043_651492564230923_7562068921266217319_n.jpg?stp=dst-jpg_p600x600_tt6&_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHsXUFTTYbMBZpLUFdO0BV41BT4JlDcbGXUFPgmUNxsZTu1M-dkswGIe2FUtW--Mz8lSzv28mzz5P4IbdFHQCG2&_nc_ohc=3JYOuy_Erq4Q7kNvgH2UC4U&_nc_oc=AdjC3W65d0OZ8MEPWiLU-IEy7isG6f5WboIGyZ88xpP9U_TsyRLebcea6PYai4Q4s0FAEIlepXq5ExT4FyoBUiUo&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=AS6xRGTb2JhqkzUwx6Jcp3h&oh=00_AYDxLHBM-PddKwCniRXlFGt8W2p1KID8jjlOMf_0svcADg&oe=67BF73AF" alt="Remini" />
            <h3 className={cx("content-title")}>Remind set name for chat!!</h3>
            <p className={cx("content")}>Vào ngày 19/3 bà zà đã đặt tên cho chat</p>
            <div className={cx("love")}>
                {blog &&
                    <>
                        <FontAwesomeIcon className={blog.heartColor == true ? cx('emoji', 'red-heart') : cx('emoji')} icon={faHeart} onClick={handleHeart} />
                        <p>{blog.NumberOfHeart}</p>
                    </>
                }
            </div>

        </div>
    );
}

export default Blog;