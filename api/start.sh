#!/usr/bin/env bash

mvn package

java -jar /api/target/EventManager-1.0-SNAPSHOT.jar