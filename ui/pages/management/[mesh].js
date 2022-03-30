import { Button, makeStyles, NoSsr } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

/**
 * getPath returns the current pathname
 * @returns {string}
 */
function getPath() {
  return window.location.pathname;
}

/**
 * extractComponentName extracts the last part of the
 * given path
 * @param {string} path
 * @returns {string}
 */
function extractComponentName(path) {
  return path.substring(path.lastIndexOf("/") + 1);
}

/**
 * capitalize capitalizes the given string and returns the modified
 * string
 *
 * If the given parameter is not sting then it will return an empty
 * string
 * @param {string} string
 *
 * @returns {string}
 */
function capitalize(string) {
  if (typeof string === "string") return string.charAt(0).toUpperCase() + string.slice(1);
  return "";
}

const useStyles = makeStyles((theme) => ({
  alreadyConfigured : {
    textAlign : "center",
    padding : theme.spacing(20),
  }
}))

function Mesh() {
  const name = extractComponentName(getPath());
  const classes = useStyles()
  const router = useRouter();

  const handleConfigure = () => {
    router.push("/settings#service-mesh");
  }

  return (
    <NoSsr>
      <Head>
        <title>{capitalize(name)} Management</title>
      </Head>
      <NoSsr>
        <div className={classes.alreadyConfigured}>
          <Button variant="contained" color="primary" size="large" onClick={handleConfigure}>
            <SettingsIcon className={classes.icon} />
            Configure Settings
          </Button>
        </div>
      </NoSsr>
    </NoSsr>
  );
}

export default Mesh;
