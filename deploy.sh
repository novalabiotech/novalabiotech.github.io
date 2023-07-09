#!/bin/sh

hugo --gc --minify
rclone -P sync public/ novala-webdav:
