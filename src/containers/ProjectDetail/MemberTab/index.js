import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddButton from "../../../components/AddButton";
import TextInput from "../../../components/TextInput";
import LoadingSpinner from "../../../components/LoadingSpinner";

import { CONST } from "../constants";
import { HIT_BOTTOM } from "../../../utils/configConst";
import { toLocalTime } from "../../../utils/generalUtils";

import PROFILE_IMAGE from "../../../utils/image/user_icon.svg";
import * as actions from "../actions";

import "./style.scss";

const MemberTab = ({}) => {
  const dispatch = useDispatch();
  const {
    projectDetail,
    projectMemberList,
    isFetchingProjectMember,
    isProjectMemberFetchBottom,
    projectMemberTimestamp,
    isAddingMember,
    addMemberErrMsg
  } = useSelector(state => state.ProjectDetailReducer);

  const [searchMember, setSerachMember] = useState("");
  const [identity, setIdentity] = useState(1);

  const handleFetchMember = () => {
    actions.fetchProjectMember(
      projectDetail.id,
      projectMemberTimestamp
    )(dispatch);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + Math.ceil(window.scrollY) >=
        document.body.offsetHeight &&
      !isFetchingProjectMember &&
      !isProjectMemberFetchBottom
    ) {
      handleFetchMember();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    if (projectMemberTimestamp === null) {
      handleFetchMember();
    }
  }, []);

  const handleInput = e => {
    const { value, name } = e.target;
    if (name === CONST.searchMember) setSerachMember(value);
    if (name === CONST.identity) setIdentity(value);
  };

  const handleAddMember = () => {
    if (searchMember.length && !isAddingMember) {
      actions.addProjectMember(
        projectDetail.id,
        searchMember,
        identity
      )(dispatch);
    }
  };

  return (
    <div className="MemberTab_container w-full">
      <div className="MemberTab_header flex justify-between">
        <div className="MemberTab_title text-20 font-semibold">
          {CONST.memberTab_title}
        </div>
        {projectDetail.identity <= 1 ? (
          <div className="MemberTab_add_continaer flex text-20">
            <TextInput
              type="text"
              name="searchMember"
              onChange={handleInput}
              value={searchMember}
              placeholder={CONST.searchMember_placeholder}
              alertMessage={addMemberErrMsg}
            />
            <select
              className="memberTab_identity"
              name={CONST.identity}
              onChange={handleInput}
              value={identity}
            >
              {CONST.identity_option.map((optionPlaceHolder, i) => {
                return (
                  <option
                    value={i + 1}
                    key={`${CONST.identity}_${i}_${optionPlaceHolder}`}
                  >
                    {optionPlaceHolder}
                  </option>
                );
              })}
            </select>
            <AddButton action={handleAddMember} wording={CONST.addMember} />
          </div>
        ) : null}
      </div>

      <div className="MemberTab_members_container">
        {projectMemberList.map(e => (
          <div key={`memberTab_member${e.id}`} className="MemberTab_Tag flex">
            <img
              className="memberTab_member_avatar"
              src={e.avatarUrl || PROFILE_IMAGE}
            />
            {e.username}--
            {toLocalTime(e.join_time)}---
            {e.id}---{e.identity}
          </div>
        ))}
        {isFetchingProjectMember ? <LoadingSpinner /> : null}
        {isProjectMemberFetchBottom ? HIT_BOTTOM : null}
      </div>
    </div>
  );
};

export default MemberTab;
