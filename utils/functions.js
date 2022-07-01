const validator = require("validator");

const getManagerName = () => {
  return {
    type: "input",
    name: "name",
    message: "What is the team manager's name?",
    validate: (answer) => {
      if (!answer.match(/^[A-Za-z]+$/gi)) {
        return "Please enter valid manager's name.";
      }
      return true;
    },
  };
};

const getManagerId = () => {
  return {
    type: "input",
    name: "id",
    message: "What is the team manager's id?",
    validate: (answer) => {
      if (answer.trim() === "") {
        return "Please enter valid manager's id.";
      }
      answer = parseInt(answer, 10);
      if (answer <= 0) {
        return "Please enter a number greater than zero.";
      }
      return true;
    },
  };
};

const getManagerEmail = () => {
  return {
    type: "input",
    name: "email",
    message: "What is the team manager's email?",
    validate: (answer) => {
      if (!validator.isEmail(answer.trim())) {
        return "Please enter a valid email address.";
      }
      return true;
    },
  };
};

const getManagerOfficeNumber = () => {
  return {
    type: "input",
    name: "officeNumber",
    message: "What is the team manager's office number?",
    validate: (answer) => {
      if (answer.trim() === "") {
        return "Please enter valid office number.";
      }
      return true;
    },
  };
};

const getEngineerName = () => {
  return {
    type: "input",
    name: "engineerName",
    message: "What is your engineer's name?",
    validate: (answer) => {
      if (!answer.match(/^[A-Za-z]+$/gi)) {
        return "Please enter valid enginneer's name.";
      }
      return true;
    },
  };
};

const getEngineerId = () => {
  return {
    type: "input",
    name: "engineerId",
    message: "What is your engineer's id?",
    validate: (answer) => {
      if (answer.trim() === "") {
        return "Please enter valid engineer's id.";
      }
      answer = parseInt(answer, 10);
      if (answer <= 0) {
        return "Please enter an id greater than zero.";
      }
      return true;
    },
  };
};

const getEngineerEmail = () => {
  return {
    type: "input",
    name: "engineerEmail",
    message: "What is your engineer's email?",
    validate: (answer) => {
      if (!validator.isEmail(answer.trim())) {
        return "Please enter a valid email address.";
      }
      return true;
    },
  };
};

const getGitHubUsername = () => {
  return {
    type: "input",
    name: "githubUsername",
    message: "What is your engineer's GitHub username?",
    validate: (answer) => {
      if (validator.isEmpty(answer.trim())) {
        return "Please enter valid Github username.";
      }
      return true;
    },
  };
};

const getInternName = () => {
  return {
    type: "input",
    name: "internName",
    message: "What is your intern's name?",
    validate: (answer) => {
      if (!answer.match(/^[A-Za-z]+$/gi)) {
        return "Please enter valid intern's name.";
      }
      return true;
    },
  };
};

const getInternId = () => {
  return {
    type: "input",
    name: "internId",
    message: "What is your intern's id?",
    validate: (answer) => {
      if (answer.trim() === "") {
        return "Please enter valid intern's id.";
      }
      answer = parseInt(answer, 10);
      if (answer <= 0) {
        return "Please enter a number greater than zero.";
      }
      return true;
    },
  };
};

const getInternEmail = () => {
  return {
    type: "input",
    name: "internEmail",
    message: "What is your intern's email?",
    validate: (answer) => {
      if (!validator.isEmail(answer.trim())) {
        return "Please enter a valid email address.";
      }
      return true;
    },
  };
};

const getInternSchool = () => {
  return {
    type: "input",
    name: "internSchool",
    message: "What is your intern's school?",
    validate: (answer) => {
      if (!answer.match(/^[A-Za-z]+$/gi)) {
        return "Please enter valid intern's school.";
      }
      return true;
    },
  };
};

module.exports = {
  getManagerName,
  getManagerId,
  getManagerEmail,
  getManagerOfficeNumber,
  getEngineerName,
  getEngineerId,
  getEngineerEmail,
  getGitHubUsername,
  getInternName,
  getInternId,
  getInternEmail,
  getInternSchool,
};
