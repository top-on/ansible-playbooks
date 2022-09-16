
if status is-interactive
    # Commands to run in interactive sessions can go here
end

# deactive greeting on startup
set fish_greeting

# activate pyenv
pyenv init - | source
