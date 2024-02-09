import React from "react";
import FileA from "../A/FileA";
import FileB from "../B/FileB";

import { Button } from "@mui/material";
import {useEffect} from "react";



function FileC() {

useEffect(()=>{
	console.log("!!!!!!")
})
	return (
		<div>
			<FileB />
			<FileA />
			<Button>Button</Button>
		</div>
	);
}

export default FileC;
