#!/usr/bin/env python3
import sys

if __name__ == '__main__':
    prefix = sys.argv[1]
    target_file = sys.argv[2]
    resources = []
    if len(sys.argv) > 3:
        for i in range(3,len(sys.argv)):
            path = sys.argv[i]
            if '.' not in path:
                continue
            resources.append(
                '{}name: "{}", path: "{}"{}'.format(
                    '{',
                    path[len(prefix):],
                    path,
                    '}'
                )
            )
        resource_str = """
let resources = [
{}
];
psychoJS.start({}expName, expInfo, resources{});
        """.format(
            ',\n'.join(resources),
            '{',
            '}'
        )
        with open(target_file) as f:
            contents = f.read()
        with open(target_file, 'w') as f:
            f.write(contents.replace('psychoJS.start({expName, expInfo});', resource_str, 1))
