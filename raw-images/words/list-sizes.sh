find $(dirname $0) -type f -print0 | xargs -0 du -h | sort -h
