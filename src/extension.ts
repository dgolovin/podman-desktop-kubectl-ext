import {ExtensionContext, cli} from '@podman-desktop/api';

export function activate(context: ExtensionContext) {
  cli.createCliTool({
    id: "kubectl",
    markdownDescription: "A command line tool used to run commands against Kubernetes clusters. It does this by authenticating with the Master Node of your cluster and making API calls to do a variety of management actions. If you\'re just getting started with Kubernetes, prepare to be spending a lot of time with kubectl",
    name: "kubectl",
    displayName: "kubectl",
    images: {
      icon: 'icon.png'
    }
  })
}