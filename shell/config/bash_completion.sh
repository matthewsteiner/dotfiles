# initialize bash completion

# set default bash completion path
if [ -z "$BASH_COMPLETION_PATH" ]; then
  export BASH_COMPLETION_PATH="/usr/local/etc/profile.d/bash_completion.sh"
fi

if [ -f $BASH_COMPLETION_PATH ]; then
  source "$BASH_COMPLETION_PATH"
fi
