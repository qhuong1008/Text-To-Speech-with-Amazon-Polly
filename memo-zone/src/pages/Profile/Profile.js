import AppHeader from "../../components/AppHeader";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./style.scss";
import { AccountApi } from "../../api/index";

const Profile = () => {
  const params = useParams();
  const [datauser, setDatauser] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadDataUser = () => {
    AccountApi.getAccountById(params.accountId)
      .then((response) => {
        setDatauser(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };
  console.log(datauser[0]);
  useEffect(() => {
    loadDataUser();
  }, []);
  return (
    <>
      <AppHeader accountId={params.accountId} />
      {loading == false && (
        <div className="profile-container">
          <h1>Profile</h1>
          <div className="profile-info">
            <div>Username: {datauser[0].username}</div>
            <div>Name: {datauser[0].name}</div>
            <div>Email: {datauser[0].email}</div>
          </div>
        </div>
      )}
      {loading && <>loading..</>}
    </>
  );
};

export default Profile;
