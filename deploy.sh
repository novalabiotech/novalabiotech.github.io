#!/bin/sh

hugo
rclone -P sync public/ novala-webdav:
