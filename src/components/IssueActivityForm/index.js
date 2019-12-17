import React, { useState } from "react";

const IssueActivityForm = ({ issueDetail }) => {
  const [comment, setComment] = useState("");
  const [isReproducible, setIsReproducible] = useState(
    issueDetail.isReproducible
  );
  const [state, setState] = useState(issueDetail.state);
  const [severity, setSeverity] = useState(issueDetail.severity);
  const [priority, setPriority] = useState(issueDetail.priority);

  const [isShowReproducible, setShowReproducible] = useState(false);
  const [isShowState, setShowState] = useState(false);
  const [isShowSeverity, setShowSeverity] = useState(false);
  const [isShowPriority, setShowPriority] = useState(false);

  return <div className="IssueActivityForm"></div>;
};

export default IssueActivityForm;
