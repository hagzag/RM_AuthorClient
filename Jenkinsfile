pipeline {
    agent {
        label 'linux-host-slave'
    }
    stages {
        stage('Example Build') {
            steps {
                echo "hello Doron"
            }
        }
        stage('Build & Push Image') {
            environment {
                AWS_ECR_LOGIN='true'
                AWS_ECR_LOGIN_REGISTRY_IDS='329054710135'
                AWS_DEFAULT_REGION='eu-west-2'
                AWS_REGION='eu-west-2'
            }
            steps {
                sh "\$(\${HOME}/.local/bin/aws ecr get-login --no-include-email &> /dev/null)"
                sh "cp \${HOME}/.docker/config.json \${HOME}/.dockercfg"
                withDockerRegistry([credentialsId: 'ecr:eu-west-2:k8s-aws-ecr', url: "${registry}"]) {
                    git 'https://github.com/tikalk/RM_AuthorClient.git'
                    def image = docker.build("329054710135.dkr.ecr.eu-west-2.amazonaws.com/k8s-fuze:${BUILD_NUMBER}")
                    image.push()
                }
            }
        }
    }
}
