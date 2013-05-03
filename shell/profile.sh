export PATH=~/bin:/usr/local/bin:/usr/local/sbin:"$PATH"

# PS1
GIT_PS1_SHOWDIRTYSTATE=true
export PS1="\n\$PWD\[$(tput setaf 1)\]\$(__git_ps1 '\n(%s)')\[$(tput setaf 7)\]\n\$ "
