import logoPath from "@/assets/images/logo.svg";
import { useFetchAuth } from "@/hooks/useFetchAuth";
import { useFetchNotifications } from "@/hooks/queries/useNotification";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Icon from "@/components/Icon/Icon";
import NotificationBadge from "@/components/badge/NotificationBadge";

const LogoHeader = () => {
  const { data } = useFetchAuth();
  const { data: notificationData } = useFetchNotifications();
  const navigate = useNavigate();

  const onClickAlarm = () => {
    navigate("/notification");
  };

  return (
    <LogoHeaderStyle>
      <LogoLink to="/home">
        <img src={logoPath} alt="Logo" />
      </LogoLink>
      <UserSection>
        {data?.nickname && (
          <h2>
            <span>안녕하세요! </span>
            {data?.nickname}
            <span>님</span>
          </h2>
        )}
        <NotificationButton onClick={onClickAlarm}>
          <Icon name="alarm" size="25px" color="gray3" />
          {notificationData && notificationData.length > 0 && (
            <NotificationBadge count={notificationData.length} />
          )}
        </NotificationButton>
      </UserSection>
    </LogoHeaderStyle>
  );
};

const LogoHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 0;

  h2 {
    display: flex;
    gap: 6px;
  }
  span {
    font-size: 12px;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  width: 90px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const NotificationButton = styled.button`
  position: relative;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export default LogoHeader;
