# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
	config.vm.box = "ubuntu/bionic64"
	config.vm.network :forwarded_port, guest: 80, host: 9115
	config.vm.provision "shell", inline: <<-SHELL
		apt-get update
		apt-get install -y curl
		apt-get install -y git
		curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
		apt-get install -y nodejs
		npm install --global gulp-cli
	SHELL
end
