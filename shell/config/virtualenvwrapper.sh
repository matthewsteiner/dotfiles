# initialize virtualenvwrapper

# set default virtualenvwrapper path
if [ -z "$VIRTUALENVWRAPPER_PATH" ]; then
  export VIRTUALENVWRAPPER_PATH="/usr/local/share/python/virtualenvwrapper.sh"
fi

if [ -f $VIRTUALENVWRAPPER_PATH ]; then
  export WORKON_HOME=$HOME/.virtualenvs
  source /usr/local/share/python/virtualenvwrapper.sh
  export PIP_VIRTUALENV_BASE=$WORKON_HOME
fi
