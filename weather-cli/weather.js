#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp, printSuccess, printError } from "./services/log.service.js";

const initCLI = () => {
    const args = getArgs(process.argv);

    if (args.h) {
        printHelp();
    }
    if (args.s) {

    }
    if (args.t) {

    }
};

initCLI();