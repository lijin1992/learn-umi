
import styles from './index.css';
import Link from 'umi/Link'
import router from 'umi/router';
export default function() {
  const userList = [{id:1,name:'小明'}]
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <ul>
        {userList.map((user)=>
        <div key={user.id}>
          <Link  to={`./about`}>{user.name}</Link>
          <button  onClick={()=>router.push('./about')}>{user.name}</button>
        </div>
        )}
      </ul>
    </div>
  );
}
