# initialize bashmarks

# set default bashmarks path
if [ -z "$BASHMARKS_PATH" ]; then
  export BASHMARKS_PATH="$HOME/.local/bin/bashmarks.sh"
fi

if [ -f $BASHMARKS_PATH ]; then
  source "$BASHMARKS_PATH"
fi
