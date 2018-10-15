pipeline {

    agent {
        // label "" also could have been 'agent any' - that has the same meaning.
        label "master"
    }

    environment {
        JENKINS_TAG = "${JOB_NAME}.${BUILD_NUMBER}".replace("/", "-")
        JOB_NAME = "${JOB_NAME}".replace("/", "-")
    }

    // The options directive is for configuration that applies to the whole job.
    options {
        buildDiscarder(logRotator(numToKeepStr: '20', artifactNumToKeepStr: '2'))
        timeout(time: 15, unit: 'MINUTES')
        ansiColor('xterm')
        timestamps()
    }

    stages {
        stage("node-build") {
            agent {
                node {
                    label "jenkins-node"  
                }
            }
            steps {
                
                sh 'printenv'

                echo '### Install deps ###'
                sh 'npm install'

                echo '### Running build ###'
                sh '''
                    if [ -z "${NODE_ENV}" ];then
                    npm run build
                    else
                    npm run build:${NODE_ENV}
                    fi
                '''
            }
            // Post can be used both on individual stages and for the entire build.
            post {
                always {

                }
                success {

                }
                failure {
                    echo "FAILURE"
                }
            }
        }

        stage("node-bake") {
            agent {
                node {
                    label "master"  
                }
            }
            when {
                expression { GIT_BRANCH ==~ /(.*master|.*develop)/ }
            }
            steps {
                sh  '''
                        docker build -t home-view .
                    '''
            }
            post {
                always {
                    archiveArtifacts "**"
                }
            }
        }

        stage("node-deploy") {
            agent {
                node {
                    label "master"  
                }
            }
            when {
                expression { GIT_BRANCH ==~ /(.*master|.*develop)/ }
            }
            steps {
                echo '### tag image for namespace ###'
                sh  '''
                    docker stop home-view
                    docker run -d -t --rm --name home-view -p 8889:8888 home-view
                    '''
            }
        }

    }
}
